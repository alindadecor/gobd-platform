import hashlib
import json
from datetime import datetime

class SimpleBlockchain:
    def __init__(self):
        self.chain = []
        
    def create_block(self, data):
        block = {
            'index': len(self.chain) + 1,
            'timestamp': datetime.now().isoformat(),
            'data': data,
            'previous_hash': self.get_latest_hash(),
        }
        block['hash'] = self.calculate_hash(block)
        self.chain.append(block)
        return block
    
    def calculate_hash(self, block):
        block_string = json.dumps({
            'index': block['index'],
            'timestamp': block['timestamp'],
            'data': block['data'],
            'previous_hash': block['previous_hash']
        }, sort_keys=True)
        return hashlib.sha256(block_string.encode()).hexdigest()
    
    def get_latest_hash(self):
        if len(self.chain) == 0:
            return '0' * 64
        return self.chain[-1]['hash']

blockchain = SimpleBlockchain()
